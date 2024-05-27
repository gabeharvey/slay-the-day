import { Box, Flex, Text } from "@chakra-ui/react";

const MyDay = () => {
  // Get the current date
  const currentDate = new Date();
  // Get the current month (0-indexed)
  const currentMonth = currentDate.getMonth();
  // Get the current year
  const currentYear = currentDate.getFullYear();
  // Get the total number of days in the current month
  const totalDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  return (
    <Flex direction="column" align="center" bg="#242424" fontFamily='Nunito'>
      <Text color='beige' fontSize="28px" mb={4}>Monthly Planner</Text>
      <Flex flexWrap="wrap" justify="center" gap={2} width="80%">
        {[...Array(totalDaysInMonth)].map((_, index) => (
          <Box key={index} bg="gray.200" p={4} borderRadius="md" width="100px">
            <Text textAlign="center" fontFamily='Nunito'>{index + 1}</Text>
            {/* You can include any other content related to each day here */}
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};

export default MyDay;
