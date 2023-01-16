const isFriend = (friend) => friend.length === 4;

const friend = (friends) => friends.filter(isFriend);
