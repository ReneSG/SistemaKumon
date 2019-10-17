Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  devise_for :users,
              path: '',
              path_names: {
                sign_in: 'login',
                sign_out: 'logout'
              },
              controllers: {
                sessions: 'sessions'
              }
  resources :students
  resources :schools
  get 'student/:student_id/next_payment_date', to: 'students#next_payment_date'
  post '/student/mark_attendance', to: 'students#mark_attendance'
end
