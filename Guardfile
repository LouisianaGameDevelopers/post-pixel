directories %w[app lib config spec]

guard "livereload" do
  extensions = {
    css: :css,
    js: :js,
    html: :html,
    png: :png,
    gif: :gif,
    jpg: :jpg
  }

  extensions.each do |ext, type|
    watch(%r{
          (?:app|vendor)
          (?:/frontend/\w+/(?<path>[^.]+)
           (?<ext>\.#{ext}))
          (?:\.\w+|$)
          }x) do |m|
      path = m[1]
      "/assets/#{path}.#{type}"
    end
  end

  compiled_exts = extensions.values.uniq
  rails_view_exts = %w[erb haml]

  watch(%r{public/.+\.(#{compiled_exts * '|'})})
  watch(%r{app/views/.+\.(#{rails_view_exts * '|'})$})
  watch(%r{app/helpers/.+\.rb})
  watch(%r{config/locales/.+\.yml})
end
