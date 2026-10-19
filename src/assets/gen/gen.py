import cairosvg, io, math, random
from PIL import Image

INK = "#0C0C0C"
LINE = "#D7E2EA"

def rasterize(svg, w, h, scale=2):
    png = cairosvg.svg2png(bytestring=svg.encode(), output_width=int(w*scale), output_height=int(h*scale))
    return Image.open(io.BytesIO(png)).convert("RGBA")

# ---------- Hero portrait placeholder (abstract 3D-render-style silhouette bust) ----------
w, h = 900, 1100
svg = f'''<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}">
<defs>
  <radialGradient id="g1" cx="50%" cy="30%" r="75%">
    <stop offset="0%" stop-color="#5a6470"/>
    <stop offset="55%" stop-color="#2c3038"/>
    <stop offset="100%" stop-color="#0C0C0C"/>
  </radialGradient>
  <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#BBCCD7"/>
    <stop offset="100%" stop-color="#646973"/>
  </linearGradient>
</defs>
<rect width="{w}" height="{h}" fill="url(#g1)"/>
<ellipse cx="450" cy="420" rx="230" ry="260" fill="url(#g2)" opacity="0.92"/>
<path d="M190 1100 Q220 760 450 740 Q680 760 710 1100 Z" fill="url(#g2)" opacity="0.92"/>
<circle cx="450" cy="420" r="230" fill="none" stroke="{LINE}" stroke-width="2" opacity="0.25"/>
<circle cx="450" cy="420" r="300" fill="none" stroke="{LINE}" stroke-width="1" opacity="0.12"/>
<circle cx="450" cy="420" r="360" fill="none" stroke="{LINE}" stroke-width="1" opacity="0.08"/>
</svg>'''
rasterize(svg, w, h, 1).convert("RGB").save("portrait.png")

# ---------- Project cover generator (minimal, line-art, matches dark/line aesthetic) ----------
def cover_svg(name, tag, accent, seed, w=1400, h=1000):
    rnd = random.Random(seed)
    blocks = ""
    for i in range(5):
        bw = rnd.randint(180, 520); bh = rnd.randint(50, 130)
        x = rnd.randint(60, w-bw-60); y = rnd.randint(260, h-bh-120)
        blocks += f'<rect x="{x}" y="{y}" width="{bw}" height="{bh}" rx="18" fill="none" stroke="{LINE}" stroke-width="2" opacity="0.5"/>'
    return f'''<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}">
<rect width="{w}" height="{h}" fill="{INK}"/>
<rect x="16" y="16" width="{w-32}" height="{h-32}" rx="36" fill="none" stroke="{LINE}" stroke-width="2" opacity="0.35"/>
<circle cx="{w-90}" cy="90" r="34" fill="none" stroke="{accent}" stroke-width="3"/>
<text x="70" y="220" font-family="sans-serif" font-weight="900" font-size="92" fill="{LINE}">{name}</text>
<text x="72" y="270" font-family="monospace" font-size="26" letter-spacing="3" fill="{accent}" opacity="0.9">{tag}</text>
{blocks}
</svg>'''

projects = [
 ("mindgame","MIND GAME","JAVASCRIPT","#ff6b6b",3),
 ("study","STUDY TRACKER","DASHBOARD","#3b9eff",5),
 ("chess","CHESS","GAME ENGINE","#c084fc",7),
 ("letters","PROPOSAL LETTERS","TEMPLATES","#ffd166",11),
 ("linkhub","LINK HUB","LINK-IN-BIO","#00d4aa",13),
 ("quran","AL-QUR'AN","REACT · TYPOGRAPHY","#00d4aa",17),
]
for slug, name, tag, accent, seed in projects:
    svg = cover_svg(name, tag, accent, seed)
    master = rasterize(svg, 1400, 1000, 1)
    master.convert("RGB").save(f"{slug}_main.png")
    # also produce 2 secondary crops for the 2-stacked-images column
    w2, h2 = master.size
    crop1 = master.crop((0, 0, w2, int(h2*0.55))).resize((900, int(900*0.55)), Image.LANCZOS)
    crop2 = master.crop((0, int(h2*0.35), w2, h2)).resize((900, int(900*0.65)), Image.LANCZOS)
    crop1.convert("RGB").save(f"{slug}_a.png")
    crop2.convert("RGB").save(f"{slug}_b.png")

print("assets generated")
