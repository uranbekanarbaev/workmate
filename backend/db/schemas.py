from pydantic import BaseModel
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Integer, Column, String

Base = declarative_base()

class Kitties(Base):
    __tablename__ = 'Kitties'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String)
    description = Column(String)
    age = Column(Integer)
    color = Column(String)
    type = Column(String)

    class Config:
        orm_mode = True
        from_attributes = True


class KittyRead(BaseModel):
    id: int
    name: str
    description: str
    age: int
    color: str
    type: str

    class Config:
        orm_mode = True
        from_attributes = True

class KittyCreate(BaseModel):
    name: str
    description: str
    age: int
    color: str
    type: str

    class Config:
        orm_mode = True
        from_attributes = True

class TypeRead(BaseModel):
    type: str

    class Config:
        orm_mode = True
        from_attributes = True