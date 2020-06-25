Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :categories
      resources :games
    end
  end

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
