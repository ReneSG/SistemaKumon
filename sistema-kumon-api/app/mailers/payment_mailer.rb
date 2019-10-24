class PaymentMailer < ApplicationMailer
  default from: "admin@kumonescobedo.com"

  def payment_confirmation(student)
    mail(to: student.guardians.first.email, subject: "Comprobante de pago")
  end
end
