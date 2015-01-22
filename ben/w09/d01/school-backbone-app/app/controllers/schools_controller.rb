class SchoolsController < ApplicationController

  def index
    @schools = School.all

    render json: @schools
  end

  def create
    @school = School.create(status_params)

    render json: @school
  end

  def update
    @school = School.find(params[:id])
    @school.update(status_params)

    render json: @school
  end

  def destroy
    @school = School.find(params[:id])
    @school.destroy

    render json: { status: "ok" }
  end


  private

  def status_params
    params.require(:school).permit(:name, :year)
  end


end
