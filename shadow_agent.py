
def generate_shadow_response(sentence, data):
    return f"""Shadow Field Report:
- Sentence: "{sentence}"
- Detected Gate: {data['gate']}.{data['line']}
- Distortion Mode: {data['mode']}
- Theme: {data['theme']}
⚠️ This reflects an unresolved pattern. Would you like a prompt for clearing?"""
