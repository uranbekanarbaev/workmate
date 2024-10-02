from fastapi.templating import Jinja2Templates
from fastapi import Depends, Request, HTTPException
from fastapi.routing import APIRouter
from db.crud import get_db, create_kitty, read_kitties, read_kitty, update_kitty, delete_kitty, read_types, read_type, read_kitties_by_type
from sqlalchemy.orm import Session
from db.schemas import KittyCreate

route = APIRouter()

templates = Jinja2Templates(directory='templates')

@route.get('/gettypes')
def getalltypes(db: Session = Depends(get_db)):
    return read_types(db)

@route.get('/gettypes/{type}')
def gettype(type: str, db: Session = Depends(get_db)):
    return read_type(db, type)

@route.get('/cat')
def cat_all(type: str = None, db: Session = Depends(get_db)):
    if type:
        return read_kitties_by_type(db, type)  # Implement filtering by type in the database
    return read_kitties(db)

@route.get('/cat/{cat_id}')
def cat_specific(cat_id: int, db: Session = Depends(get_db)):
    return read_kitty(db, kitty_id=cat_id)

@route.post('/cat')
def cat_create(kitty: KittyCreate, db: Session = Depends(get_db)):
    return create_kitty(db, name=kitty.name, description=kitty.description, age=kitty.age, color=kitty.color, type=kitty.type)

@route.put('/cat/{kitty_id}')
def cat_update(kitty_id: int, kitty: KittyCreate, db: Session = Depends(get_db)):
    data = update_kitty(db, kitty_id = kitty_id, name = kitty.name, description=kitty.description, age=kitty.age, color=kitty.color, type = kitty.type)
    if not data:
        raise HTTPException(status_code=404, detail="Kitty not found")
    return data

@route.delete('/cat/{cat_id}')
def cat_delete(cat_id: int, db: Session = Depends(get_db)):
    return delete_kitty(db, kitty_id=cat_id)