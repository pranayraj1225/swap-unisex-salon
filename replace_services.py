import re

with open('src/components/CoreSections.tsx', 'r') as f:
    content = f.read()

content = content.replace('https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800')
content = content.replace('https://images.unsplash.com/photo-1552046122-03184de85e08?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800')
content = content.replace('https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=80&w=800')

with open('src/components/CoreSections.tsx', 'w') as f:
    f.write(content)
