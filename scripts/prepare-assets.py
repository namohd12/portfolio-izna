from pathlib import Path
from concurrent.futures import ThreadPoolExecutor
from urllib.request import Request, urlopen
from io import BytesIO
from PIL import Image, ImageDraw, ImageFont, ImageOps
import pymupdf

root = Path(__file__).resolve().parents[1]
images = root / 'public' / 'images'
images.mkdir(parents=True, exist_ok=True)
photo = Image.open(root.parent / 'pic.jpg')
photo = ImageOps.exif_transpose(photo)
photo.thumbnail((1000, 1334))
photo.save(images / 'nor-izna.webp', 'WEBP', quality=86)

assets = [
    ('workspace', 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=900&q=85'),
    ('architecture', 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=85'),
    ('plant', 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=900&q=85'),
]

def download(asset):
    name, url = asset
    data = urlopen(Request(url, headers={'User-Agent':'Mozilla/5.0'}), timeout=45).read()
    image = Image.open(BytesIO(data)).convert('RGB')
    image = ImageOps.fit(image, (900, 525))
    image.save(images / f'{name}.webp', 'WEBP', quality=82)
    return f'{name}: {len(data)} source bytes'

with ThreadPoolExecutor(max_workers=3) as pool:
    for result in pool.map(download, assets):
        print(result)
(images / 'credits.txt').write_text('Decorative photography sourced from Unsplash. These images do not depict client projects.\n' + '\n'.join(f'{name}: {url}' for name, url in assets), encoding='utf-8')

resume = pymupdf.open(root.parent / 'RESUME NOR IZNA MOHD ISA.pdf')
for page in resume:
    for text in ['Mobile', 'Address:', 'REFERENCE', 'Available upon request.']:
        for rect in page.search_for(text):
            page.add_redact_annot(pymupdf.Rect(0, rect.y0-1, page.rect.width, rect.y1+1), fill=(1,1,1))
    page.apply_redactions()
resume.set_metadata({'title': 'Nor Izna Binti Mohd Isa — Professional Resume', 'author': 'Nor Izna Binti Mohd Isa'})
resume.save(root / 'public' / 'nor-izna-resume.pdf', garbage=4, deflate=True)
print('Public resume prepared; personal phone, address and reference section removed.')

preview = Image.new('RGB', (1200,630), '#f8f9f6')
draw = ImageDraw.Draw(preview)
serif = ImageFont.truetype('C:/Windows/Fonts/georgia.ttf', 86)
body = ImageFont.truetype('C:/Windows/Fonts/calibri.ttf', 25)
small = ImageFont.truetype('C:/Windows/Fonts/calibri.ttf', 18)
draw.line((70,64,1130,64),fill='#dfe3db',width=1)
draw.text((73,104),'IT AUDIT  /  CYBERSECURITY  /  RISK & COMPLIANCE',font=small,fill='#526857')
draw.text((67,182),'Nor Izna',font=serif,fill='#282e2a')
draw.text((67,286),'Mohd Isa.',font=serif,fill='#282e2a')
draw.text((74,430),'IT risk. Clear insights. Stronger assurance.',font=body,fill='#626b64')
draw.line((74,532,1128,532),fill='#dfe3db',width=1)
draw.text((74,557),'A PROFESSIONAL PORTFOLIO',font=small,fill='#526857')
draw.rectangle((864,147,1100,444),fill='#eeeede',outline='#879386',width=1)
draw.rectangle((880,163,1084,428),fill='#dce0d1')
draw.ellipse((968,211,1018,261),fill='#b7c0a6')
draw.polygon([(880,320),(940,305),(1084,384),(1084,428),(880,428)],fill='#b3bda3')
draw.polygon([(880,386),(1084,328),(1084,428),(880,428)],fill='#9ca98c')
preview.save(root/'public'/'social-preview.png',optimize=True)
print('Optimised images and social preview ready.')
