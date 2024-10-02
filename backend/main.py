from fastapi import FastAPI
from routes.routes import route
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Cat Management API",
    description="This is an API to manage a collection of cats, including adding, updating, and retrieving cat details and types.",
    version="1.0.0",
    contact={
        "name": "Uranbek Anarbaev",
        "email": "uranbek@example.com",
    })

app.include_router(route)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5174", "*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)