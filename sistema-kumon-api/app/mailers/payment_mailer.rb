class PaymentMailer < ApplicationMailer
  default from: "admin@kumon-escobedo.email"

  def payment_confirmation(student)
    mail(to: student.guardians.first.email, subject: "Comprobante de pago")
  end
end
