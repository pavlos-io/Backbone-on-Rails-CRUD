class CreateRecords < ActiveRecord::Migration
  def change
    create_table :records do |t|
      t.string :first_name
      t.string :last_name
      t.integer :age

      t.timestamps
    end
  end
end
