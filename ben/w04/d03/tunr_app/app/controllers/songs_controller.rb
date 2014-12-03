class SongsController < ApplicationController
    before_action :find_mixtape, only: [:show, :edit, :update, :destroy]

    def index
        @songs = Song.all
    end

    def edit
    end

    def update
        if @song.update song_params
            redirect_to @song
        else
            render 'edit'
        end
    end

    def show
    end

    def create
        @song = Song.new song_params
        if @song.save
            redirect_to @song
        else
            render 'new'
        end
    end

    def new
        @song = Song.new
    end

    def destroy
        @song.destroy
        redirect_to songs_path
    end


    private

    def find_mixtape
        @song = Song.find(params[:id])
    end

    def song_params
        params.require(:song).permit(:name, :year, :genre, :duration, :artist_id)
    end
end



class MixtapesController < ApplicationController

    before_action :find_mixtape, only: [:show, :edit, :update, :destroy]

    def index
        @mixtapes = Mixtape.all
    end

    def new
        @mixtape = Mixtape.new
    end

    def create
        @mixtape = Mixtape.new mixtape_params
        if @mixtape.save
            redirect_to @mixtape
        else
            render 'new'
        end
    end

    def show
    end

    def edit
        @mixtape = Mixtape.find(params[:id])
    end

    def update
        if @mixtape.update mixtape_params
            redirect_to @mixtape
        else
            render 'edit'
        end
    end

    def destroy
        @mixtape.destroy
        redirect_to mixtapes_path
    end


    private

    def find_mixtape
        @mixtape = Mixtape.find(params[:id])
    end

    def mixtape_params
        params.require(:mixtape).permit(:name, :description)
    end

end
