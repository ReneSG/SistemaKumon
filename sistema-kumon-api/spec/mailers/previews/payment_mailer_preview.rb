# Preview all emails at http://localhost:3000/rails/mailers/payment_mailer
class PaymentMailerPreview < ActionMailer::Preview
  def payment_confirmation
    PaymentMailer.payment_confirmation(Student.first)
  end
end
