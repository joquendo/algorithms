function merge_ranges(meetings) {
  
  if (meetings.length <= 1) return meetings;
  
  const meetingsCp = JSON.parse(JSON.stringify(meetings));
  
  // Sort meetings by start time
  const sortedMeetings = meetingsCp.sort((a,b) => {
    return a.startTime - b.startTime;
  });

  // initialize mergedMeetings with the earliest meeting
  const mergedMeetings = [sortedMeetings[0]];

  // if mergeable, then merge
  for (let i = 1; i < sortedMeetings.length; i++) {
    const currentMeeting = sortedMeetings[i];
    const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];

    if(currentMeeting.startTime <= lastMergedMeeting.endTime) {
      lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime);
    } else {
      mergedMeetings.push(currentMeeting);
    }
  }

  return mergedMeetings;
}
let test = merge_ranges([
  {
    startTime: 0,
    endTime: 1
  },
  {
    startTime: 3,
    endTime: 5
  },
  {
    startTime: 4,
    endTime: 8
  },
  {
    startTime: 10,
    endTime: 12
  }, 
  {
    startTime: 9,
    endTime: 10
  }
]);

console.log(test);
