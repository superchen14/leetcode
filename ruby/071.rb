# @param {String} path
# @return {String}
def simplify_path(path)
  path = path[1..-1] if path[0] == "/"
  path = path[0..-2] if path[-1] == "/"

  stack = []
  path.split("/").each do |str|
    next if str == "." || str == ""
    if str == ".."
      stack.pop
    else
      stack.push(str)
    end
  end

  "/" + stack.join("/")
end