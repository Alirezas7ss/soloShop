export default function replaceSpacesWithHyphens(str: String | undefined) {
    return str?.replace(/\s/g, "-");
  }