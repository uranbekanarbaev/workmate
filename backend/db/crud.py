from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session
from sqlalchemy import create_engine
from .schemas import Base, Kitties, KittyRead, TypeRead

link_to_db = 'sqlite:///kitties.db'

engine = create_engine(link_to_db)

Base.metadata.create_all(engine)

SessionLocal = sessionmaker(bind=engine)
session = SessionLocal()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

#crud operations:

def read_kitties(db: Session, skip = 0, limit = 10):
    items = db.query(Kitties).offset(skip).limit(limit).all()
    if items:
        return [KittyRead.from_orm(kitty) for kitty in items]
    else:
        return None

def read_kitty(db: Session, kitty_id: int):
    data = db.query(Kitties).filter(Kitties.id == kitty_id).first()
    if data:
        return data
    else:
        return None
    
def read_kitties_by_type(db: Session, kitty_type: str):
    data = db.query(Kitties).filter(Kitties.type == kitty_type).all()
    if data:
        return data
    else:
        return None

def create_kitty(db: Session, name: str, description: str, age: int, color: str, type: str):
    new_kitty = Kitties(name = name, description = description, age = age, color = color ,type = type)
    db.add(new_kitty)
    db.commit()
    db.refresh(new_kitty)
    return new_kitty

def update_kitty(db: Session, kitty_id: int, name: str, description: str, age: int, color: str, type: str):
    kitty_update = db.query(Kitties).filter(Kitties.id == kitty_id).first()
    if kitty_update:
        kitty_update.name = name
        kitty_update.description = description
        kitty_update.age = age
        kitty_update.color = color
        kitty_update.type = type
        db.commit()
        db.refresh(kitty_update)
        return kitty_update
    else:
        return None


def delete_kitty(db: Session, kitty_id: int):
    kitty_delete = db.query(Kitties).filter(Kitties.id == kitty_id).first()
    if kitty_delete:
        db.delete(kitty_delete)
        db.commit()
        return kitty_delete
    return None

def read_types(db: Session):
    types = db.query(Kitties.type).distinct().all()
    if types:
        return [TypeRead.from_orm(type) for type in types]
    else:
        return None

def read_type(db: Session, type: str):
    data = db.query(Kitties).filter(Kitties.type == type).all()
    if data:
        return data
    else:
        return None
