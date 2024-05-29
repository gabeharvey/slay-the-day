import { Box, Flex, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const MyMonth = () => {
  // Get the current date
  const currentDate = new Date();
  // Get the current month (0-indexed)
  const currentMonth = currentDate.getMonth();
  // Get the current year
  const currentYear = currentDate.getFullYear();
  // Get the total number of days in the current month
  const totalDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  // Get the first day of the current month
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  // Days of the week
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Get the month and year in a readable format
  const monthYear = currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  // Get the current day of the month
  const currentDay = currentDate.getDate();

  // State to hold the current time
  const [currentTime, setCurrentTime] = useState(currentDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));

  // Function to update the current time
  const updateCurrentTime = () => {
    const centralTime = new Date(currentDate.toLocaleString('en-US', { timeZone: 'America/Chicago' }));
    setCurrentTime(centralTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
  };

  // Update the time every second
  useEffect(() => {
    const interval = setInterval(() => {
      updateCurrentTime();
    }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <Flex direction="column" align="center" bg="#242424" fontFamily="Nunito">
      <Text color="beige" fontSize="28px" mb={4} fontFamily="Nunito">Monthly Planner</Text>
      <Text color="beige" fontSize="24px" mb={4} fontFamily="Nunito">{monthYear}</Text>
      
      {/* Day of the Week Headers */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(7, 1fr)"
        gap={2}
        width="80%"
        mb={2}
      >
        {daysOfWeek.map((day, index) => (
          <Box key={index} bg="gray.200" p={2} borderRadius="md" textAlign="center" fontSize={{ base: "sm", md: "lg" }}>
            <Text fontWeight="bold" color="black" fontFamily="Comic Sans MS">{day}</Text>
          </Box>
        ))}
      </Box>

      {/* Calendar Grid */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(7, 1fr)"
        gap={2}
        width="80%"
      >
        {/* Add empty boxes for the days before the first day of the month */}
        {[...Array(firstDayOfMonth)].map((_, index) => (
          <Box key={`empty-${index}`} />
        ))}
        {[...Array(totalDaysInMonth)].map((_, index) => {
          const day = index + 1;
          const isToday = day === currentDay;
          const isPreviousDay = day < currentDay;
          return (
            <Box
              key={index}
              bg={isToday ? "skyblue" : isPreviousDay ? "lightcoral" : "gray.200"}
              p={2}
              borderRadius="md"
              textAlign="center"
              fontSize={{ base: "sm", md: "lg" }}
            >
              <Text
                fontWeight="bold"
                color={isToday ? "beige" : isPreviousDay ? "beige" : "black"}
                fontFamily="Comic Sans MS"
              >
                {day}
              </Text>
            </Box>
          );
        })}
      </Box>
      
      {/* Current Time in Central Time */}
      <Text color="beige" fontSize="20px" mt={4} fontFamily="Nunito">
        Current Time (Central Time): {currentTime}
      </Text>
    </Flex>
  );
};

export default MyMonth;
