require 'rails_helper'

def decoded_jwt_token_from_response(response)
  token_from_request = response.headers['Authorization'].split(' ').last
  JWT.decode(token_from_request, Rails.application.credentials.devise_jwt_secret_key, true)
end

RSpec.describe 'GET /students', type: :request do
  let(:student) { create(:student) }
  let(:url) { '/students' }

  context 'when no payments' do
    before do
      student
      get url
    end

    it 'returns 200' do
      expect(response).to have_http_status(200)
    end

    it 'returns a student array' do
      expect(response.body).to eq(Student.all.to_json(methods: [:next_payment_date]))
    end
  end
end
