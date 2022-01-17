data = []

with open("near protocol.txt") as f:
    for line in f:
        data.append(line.strip(","))
    for elem in data:
        if elem == '\n':
            data.remove(elem)

newd = []

for el in data:
    el = el.replace("\n", "")
    el.join(",")
    el.encode("utf-8")
    newd.append(el)

with open("new_near_protocol.txt", "w", encoding="utf-8") as txt:
    txt.write(f"{newd}")

# Ã\xa0 = à, Ãª = ê, Ã¨ = è, Ã© = é, Ã§ = ç, Ã» = û, Ã´ = ô, crypte = crypto,
# Ã¢ = â,  blocs chaÃ®ne = blockchain, blue jays = blockchain, Ã® = î, Ã¹ = ù
# blogo chaÃ®ne = blockchain, belote chaÃ®ne = blockchain, 