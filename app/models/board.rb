# == Schema Information
#
# Table name: boards
#
#  id         :integer          not null, primary key
#  title      :string(255)      not null
#  user_id    :integer          not null
#  created_at :datetime
#  updated_at :datetime
#

class Board < ActiveRecord::Base
  validates :title, :user, presence: true

  belongs_to :user
  has_many :lists
  has_many :board_memberships
  has_many :members, through: :board_memberships, source: :user
  has_many( 
    :cards,
    class_name: "Card",
    through: :lists,
    source: :cards
  )

  def is_member?(u)
    return true if u.id == self.user_id
    board_memberships.where(user_id: u.id).exists?
  end
end