import re

with open('src/components/CoreSections.tsx', 'r') as f:
    content = f.read()

content = content.replace('https://images.unsplash.com/photo-1521590832167-7bfc17484d20?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800')
content = content.replace('https://images.unsplash.com/photo-1593702288056-ccbfb4582fcc?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&q=80&w=800')
content = content.replace('https://images.unsplash.com/photo-1605497788044-5a32c7078422?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=800')
content = content.replace('https://images.unsplash.com/photo-1622288189028-eb8de3205232?auto=format&fit=crop&q=80&w=1200', 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=80&w=1200')

with open('src/components/CoreSections.tsx', 'w') as f:
    f.write(content)
