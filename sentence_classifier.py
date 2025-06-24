
def classify_sentence(sentence):
    # Dummy logic for now
    if "explain" in sentence.lower():
        return {"gate": "23", "line": "4", "mode": "Repressive", "theme": "Invisibility"}
    elif "trust" in sentence.lower():
        return {"gate": "44", "line": "3", "mode": "Repressive", "theme": "Distrust"}
    elif "control" in sentence.lower():
        return {"gate": "21", "line": "6", "mode": "Reactive", "theme": "Control"}
    elif "good enough" in sentence.lower():
        return {"gate": "18", "line": "2", "mode": "Reactive", "theme": "Perfectionism"}
    else:
        return {"gate": "10", "line": "5", "mode": "Repressive", "theme": "Self-Doubt"}
