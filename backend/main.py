import os
from jinja2 import Environment, FileSystemLoader
from pyhtml2pdf import converter

data = {
    "name": "Ain Alsaba Atiq",
    "age": 18
}

def makePdf(data):
    file_loader = FileSystemLoader('public')
    env = Environment(loader=file_loader)

    template = env.get_template('./pdf.html')

    output = template.render(data=data)

    with open('./public/res.html', 'w') as f:
        f.write(output)
        f.close()

    path = os.path.abspath('./public/res.html')
    converter.convert(f'file:///{path}', 'sample.pdf')

if __name__ == '__main__':
    makePdf(data)