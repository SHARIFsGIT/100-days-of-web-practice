const evenFriend = (friends) => {
    let evenFriends = [];
    for (const friend of friends) {
        if (friend.length % 2 === 0) {
            evenFriends.push(friend);
        }
    }
    return evenFriends;
};

const myFriends = ["Alice", "Boby", "Charlie", "David", "Eve", "John"];
const friendsWithEvenLengthNames = evenFriend(myFriends);
console.log(friendsWithEvenLengthNames);
