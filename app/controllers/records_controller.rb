class RecordsController < ApplicationController
  respond_to :json

  def index
    respond_with Record.all
  end

  def create
    respond_with Record.create(record_params)
  end

  def destroy
    respond_with Record.destroy(params[:id])
  end

  private
  def record_params
    params.require(:record).permit(:first_name, :last_name, :age)
  end

end
