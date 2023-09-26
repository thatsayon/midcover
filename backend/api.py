from fastapi import FastAPI, Request
from main import makePdf
from fastapi.params import Body
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from starlette.responses import FileResponse
app = FastAPI()

class PdfInfo(BaseModel):
    sub: str
    jobN: str
    jobName: str 
    name: str 
    roll: str 
    sem: str 
    shift: str 
    depart: str
    
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    makePdf(data={"name":"Sara Ali Khan"})
    return {"message": "everything is working perfectly"}

@app.post("/")
def getData(item: PdfInfo):
    print(item)
    json_compatible_item_data = jsonable_encoder(item)
    makePdf(data=json_compatible_item_data)
    # return JSONResponse(content=json_compatible_item_data)
    headers = {
        "Content-Disposition": "inline; filename=sample.pdf"
    }  
    
    response = FileResponse("sample.pdf", media_type="application/pdf", headers=headers)
    return response 

@app.get("/pdf")
def get_pdf():
    headers = {
        "Content-Disposition": "inline; filename=sample.pdf"
    }  
    
    response = FileResponse("sample.pdf", media_type="application/pdf", headers=headers)
    return response
