import { Song } from './types';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

const supabaseClient = createClientComponentClient();

export const getSongs = async (): Promise<Song[]> => {
  const { data, error } = await supabaseClient.from('defaultsongs').select('*');
  if (error) console.log('error fetching songs!!!', error);
  return (data as any) || [];
};

export const useLoadSong = (song: Song) => {
  const { data: songData } = supabaseClient.storage
    .from('songs')
    .getPublicUrl(song.song_path);

  return songData.publicUrl;
};
