class CreateHearAboutInterviews < ActiveRecord::Migration[6.0]
  def change
    create_table :hear_about_interviews do |t|
      t.belongs_to :student, null: false, foreign_key: true
      t.boolean :internet
      t.string :maganzine
      t.string :ad
      t.string :article
      t.boolean :kumon_ad
      t.boolean :family_recommendation
      t.boolean :friend_recommendation
      t.boolean :school_recommendation
      t.string :another_recommendation

      t.timestamps
    end
  end
end
