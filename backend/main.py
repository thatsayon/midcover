import os
from jinja2 import Environment, FileSystemLoader
import pdfkit
from pyhtml2pdf import converter

data = {
    "name": "Ain Alsaba Atiq",
    "age": 18
}

file_loader = FileSystemLoader('public')
env = Environment(loader=file_loader)

template = env.get_template('pdf.html')

output = template.render(data=data)

with open('./public/res.html', 'w') as f:
    f.write(output)
    f.close()


# pdfkit.from_file('./public/res.html', 'output.pdf', css='./public/style/pdf.css')
path = os.path.abspath('./public/res.html')
print(path)
converter.convert(f'file:///{path}', 'sample.pdf')