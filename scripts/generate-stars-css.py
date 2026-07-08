import os
import random

random.seed(6539)

BASE = os.path.join(os.path.dirname(__file__), '..', 'css', 'stars-layers.css')


def layer(count, spread_x=2000, spread_y=2000):
    return ',\n    '.join(
        f'{random.randint(0, spread_x)}px {random.randint(0, spread_y)}px var(--star-color)'
        for _ in range(count)
    )


layers = [
    ('#stars', 700, 1, 1, 50),
    ('#stars2', 200, 2, 2, 100),
    ('#stars3', 100, 3, 3, 150),
]

blocks = ['/* Star layers — Uiverse.io by amir_6539 technique */']

for sel, count, w, h, duration in layers:
    shadow = layer(count)
    blocks.append(
        f'{sel} {{\n'
        f'  width: {w}px;\n'
        f'  height: {h}px;\n'
        f'  background: transparent;\n'
        f'  box-shadow:\n    {shadow};\n'
        f'  animation: animStar {duration}s linear infinite;\n'
        f'}}'
    )
    blocks.append(
        f'{sel}:after {{\n'
        f'  content: " ";\n'
        f'  position: absolute;\n'
        f'  top: 2000px;\n'
        f'  width: {w}px;\n'
        f'  height: {h}px;\n'
        f'  background: transparent;\n'
        f'  box-shadow:\n    {shadow};\n'
        f'}}'
    )

with open(BASE, 'w', encoding='utf-8') as f:
    f.write('\n\n'.join(blocks))

print('Wrote', os.path.abspath(BASE))
