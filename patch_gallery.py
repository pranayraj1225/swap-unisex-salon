import re

with open('src/components/SocialAndGallery.tsx', 'r') as f:
    content = f.read()

content = content.replace('https://images.unsplash.com/photo-1521590832167-7bfc17484d20?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=800')
content = content.replace('https://images.unsplash.com/photo-1593702288056-ccbfb4582fcc?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=800')
content = content.replace('https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=800') # duplicate, ignore
content = content.replace('https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800') # fix 2nd
content = content.replace('https://images.unsplash.com/photo-1516975080661-460d3c0fb8d4?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800')

with open('src/components/SocialAndGallery.tsx', 'w') as f:
    f.write(content)
