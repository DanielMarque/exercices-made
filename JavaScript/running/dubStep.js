function songDecoder(song){
    for (let i in song){
        song = song.replace('WUB','')    
    }    
    return song
}
  
songDecoder('AWUBWUBWUBBWUBWUBWUBC')