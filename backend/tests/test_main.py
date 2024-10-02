import pytest
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from db.schemas import Base
from main import app
from db.crud import get_db

SQLALCHEMY_DATABASE_URL = "sqlite:///test.db"
engine = create_engine(SQLALCHEMY_DATABASE_URL)
TestingSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base.metadata.create_all(bind=engine)

def override_get_db():
    try:
        db = TestingSessionLocal()
        yield db
    finally:
        db.close()

app.dependency_overrides[get_db] = override_get_db

client = TestClient(app)

def test_get_types():
    response = client.get("/gettypes")
    assert response.status_code == 200
    assert isinstance(response.json(), list)

def test_create_kitty():
    new_kitty = {
        "name": "Kitty 1",
        "description": "A cute kitty",
        "age": 2,
        "color": "red",
        "type": "Siamese"
    }
    response = client.post("/cat", json=new_kitty)
    assert response.status_code == 200
    data = response.json()
    assert data["name"] == new_kitty["name"]
    assert data["description"] == new_kitty["description"]

def test_get_kitty():
    new_kitty = {
        "name": "Kitty 2",
        "description": "A playful kitty",
        "age": 1,
        "color": "blue",
        "type": "Persian"
    }
    response = client.post("/cat", json=new_kitty)
    assert response.status_code == 200
    kitty_id = response.json()["id"]

    response = client.get(f"/cat/{kitty_id}")
    assert response.status_code == 200
    assert response.json()["name"] == new_kitty["name"]

def test_update_kitty():
    new_kitty = {
        "name": "Kitty 3",
        "description": "A sleepy kitty",
        "age": 3,
        "color": "black",
        "type": "Sphynx"
    }
    response = client.post("/cat", json=new_kitty)
    assert response.status_code == 200
    kitty_id = response.json()["id"]

    updated_kitty = {
        "name": "Kitty 4",
        "description": "A naughty kitty",
        "age": 5,
        "color": "white",
        "type": "Bengal"
    }
    response = client.put(f"/cat/{kitty_id}", json=updated_kitty)
    assert response.status_code == 200
    data = response.json()
    assert data["name"] == updated_kitty["name"]

def test_delete_kitty():
    new_kitty = {
        "name": "Kitty 4",
        "description": "A naughty kitty",
        "age": 5,
        "color": "purple",
        "type": "Bengal"
    }
    response = client.post("/cat", json=new_kitty)
    assert response.status_code == 200
    kitty_id = response.json()["id"]

    response = client.delete(f"/cat/{kitty_id}")
    assert response.status_code == 200
    assert response.json()["name"] == new_kitty["name"]
