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
  resources :payments
  get 'attendances/today', to: 'attendances#todays'
  resources :subjects
  get 'student/:student_id/next_payment_date', to: 'students#next_payment_date'

  post '/student/mark_attendance', to: 'students#mark_attendance'
  post '/student/set_to_inactive', to: 'students#set_to_inactive'
end
