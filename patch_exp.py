import re

with open('src/components/ExperienceSections.tsx', 'r') as f:
    content = f.read()

content = content.replace('https://images.unsplash.com/photo-1516975080661-460d3c0fb8d4?auto=format&fit=crop&q=80&w=1200', 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=1200')

with open('src/components/ExperienceSections.tsx', 'w') as f:
    f.write(content)
