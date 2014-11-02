class RecordsController < ApplicationController
  respond_to :json

  def index
    respond_with Record.all
  end

  def show
    respond_with Record.find(params[:id])
  end

  def create
    respond_with Record.create(params[:record])
  end


end
