FactoryBot.define do
  factory :student do
    name { Faker::Name.first_name }
    last_name_father { Faker::Name.last_name }
    last_name_mother { Faker::Name.last_name }
    identifier { Faker::Alphanumeric.alphanumeric(number: 10) }
    date_of_birth { Faker::Date.birthday }
    gender { Faker::Number.between(from: 0, to: 1) }
    phone { Faker::PhoneNumber.cell_phone }
    school_id { FactoryBot.create(:school).id }
  end
end
