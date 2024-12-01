import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { Play } from "lucide-react";

export function TrackList({ songs, onDragEnd, currentSong, onSongSelect }) {
  return (
    <div className="w-[62rem] mt-[-7rem] p-6 rounded-lg">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold text-white ml-12">Popular</h2>
        <button className="text-sm text-white hover:text-red-500 mr-16">
          See All
        </button>
      </div>

      {/* Track List Header */}
      <div className="grid grid-cols-[1fr_4fr_2fr_1fr_3fr] gap-4 py-2 px-4 text-lg ml-10 font-semibold text-gray-100">
        <div className="ml-[-0.3rem]">#</div>
        <div className="ml-6">Title</div>
        <div className="ml-8">Playing</div>
        <div>Time</div>
        <div className="right-0 ml-32">Album</div>
      </div>

      {/* Draggable Track Rows */}
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="songs">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {songs.map((song, index) => (
                <Draggable key={song.id} draggableId={song.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={`grid grid-cols-[1fr_4fr_2fr_1fr_3fr] gap-4 py-3 px-4 items-center cursor-pointer rounded-md transition-all ${
                        currentSong?.id === song.id
                          ? "bg-red-950"
                          : "hover:bg-red-950"
                      }`}
                      onClick={() => onSongSelect(song)}
                    >
                      {/* Track Index or Play Icon */}
                      <div className="text-center">
                        {currentSong?.id === song.id ? (
                          <Play className="h-4 w-4 text-red-500" />
                        ) : (
                          <span>{index + 1}</span>
                        )}
                      </div>

                      {/* Track Info */}
                      <div className="flex items-center gap-3">
                        <img
                          src={song.coverUrl}
                          alt={song.title}
                          className="w-10 h-10 rounded-md object-cover"
                        />
                        <div>
                          <p className="text-sm font-semibold text-white">
                            {song.title}
                          </p>
                          <p className="text-xs text-gray-400">{song.artist}</p>
                        </div>
                      </div>

                      {/* Track Play Count */}
                      <div className="text-center text-gray-400">
                        {song.playCount}
                      </div>

                      {/* Track Duration */}
                      <div className="text-center text-gray-400">
                        {song.duration}
                      </div>

                      {/* Track Album */}
                      <div className="text-center text-gray-400">
                        {song.album}
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      {/* Controls Section */}
      <div className="flex justify-between items-center mt-6">
        <button className="text-lg font-medium text-red-400 hover:text-red-500">
          Play All
        </button>
        <button className="text-lg font-medium text-red-400 hover:text-red-500">
          Shuffle
        </button>
      </div>
    </div>
  );
}
