import base64, io
from PIL import Image

TARGET = (788, 204)
WHITE = (255, 255, 255)

light_im = Image.open("logo.png").convert("RGBA")

r, g, b, a = light_im.split()
dark_mask = r.point(lambda v: 255 if v < 128 else 0)
white_layer = Image.merge("RGBA", (
    Image.new("L", light_im.size, WHITE[0]),
    Image.new("L", light_im.size, WHITE[1]),
    Image.new("L", light_im.size, WHITE[2]),
    a,
))
dark_im = Image.composite(white_layer, light_im, dark_mask)

def prep(im):
    im = im.crop(im.getchannel("A").getbbox())
    return im.resize(TARGET, Image.LANCZOS)

light_im = prep(light_im)
dark_im = prep(dark_im)

def b64(im):
    buf = io.BytesIO()
    im.save(buf, format="PNG", optimize=True)
    return base64.b64encode(buf.getvalue()).decode()

light, dark = b64(light_im), b64(dark_im)
w, h = TARGET

svg = f'''<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}">
  <style>
    .dark {{ display: none }}
    @media (prefers-color-scheme: dark) {{
      .light {{ display: none }}
      .dark  {{ display: inline }}
    }}
  </style>
  <image class="light" width="{w}" height="{h}" href="data:image/png;base64,{light}"/>
  <image class="dark"  width="{w}" height="{h}" href="data:image/png;base64,{dark}"/>
</svg>'''

with open("logo.svg", "w", encoding="utf-8") as f:
    f.write(svg)

print(f"logo.svg создан ({w}x{h})")