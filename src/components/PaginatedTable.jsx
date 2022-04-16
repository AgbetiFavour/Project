import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Box,
  HStack,
  Stack,
  Button,
  Text,
} from "@chakra-ui/react"
import { nanoid } from "@reduxjs/toolkit"
import { useEffect, useState } from "react"
import { BiChevronRight, BiChevronLeft } from "react-icons/bi"
import FullPageLoader from "./fullPageLoader"
import { GrDocumentMissing } from "react-icons/gr"
import { GlobalStyle } from "./GlobalStyle"
import { DATA_ROWS } from "../app/constants"
export const PaginatedTable = ({
  columns = [],
  data,
  updateTable,
  currentLength,
  total,
  noPagination,
}) => {
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(0)
  const [isEmpty, setEmpty] = useState(false)
  const { smBold, black } = GlobalStyle

  useEffect(() => {
    if (noPagination) {
      setEmpty(({}, () => false))
      return
    }
    if (currentLength < 1 || !currentLength) {
      setEmpty(({}, () => true))
    } else {
      setEmpty(({}, () => false))
    }
  }, [currentLength, noPagination])

  const goBack = () => {
    setPage(initial => (initial === 0 ? initial : initial - 1))
    if (page === 0) return
    setLoading(true)
    updateTable(page - 1).then(() => setLoading(false))
  }

  const goNext = () => {
    if (!currentLength) {
      return
    }
    if (currentLength < DATA_ROWS.LIMIT) {
      return
    }
    setPage(initial => initial + 1)
    setLoading(true)
    updateTable(page + 1).then(() => setLoading(false))
  }

  const ARROW_STYLE = {
    borderRadius: "full",
    bg: "gray.200",
    p: "10px",
    cursor: "pointer",
    _hover: { bg: "gray.200", transform: "scale(1.3)" },
  }

  const LEFT_STYLE = {
    ...ARROW_STYLE,
    variant: "ghost",
    disabled: page ? false : true,
    opacity: page === 0 ? ".4" : "1",
  }

  const RIGHT_STYLE = {
    ...ARROW_STYLE,
    variant: "ghost",
    disabled: currentLength < DATA_ROWS.LIMIT ? true : false,
    opacity: currentLength < DATA_ROWS.LIMIT ? ".4" : "1",
  }

  return (
    <Box
      overflow="auto"
      bg="#fff"
      p="10px"
      my="20px"
      borderRadius="10px"
      position="relative"
    >
      {loading ? (
        <FullPageLoader h="100%" bg="transparent" />
      ) : !isEmpty ? (
        <Table size="sm">
          <Thead>
            <Tr>
              {columns.map(item => {
                return (
                  <Th {...smBold} color={black} py="10px" key={nanoid()}>
                    {item}
                  </Th>
                )
              })}
            </Tr>
          </Thead>

          <Tbody>{data}</Tbody>
        </Table>
      ) : (
        <Stack spacing="30px">
          <Table>
            <Thead>
              <Tr>
                {columns.map(item => {
                  return (
                    <Th {...smBold} color={black} py="10px" key={nanoid()}>
                      {item}
                    </Th>
                  )
                })}
              </Tr>
            </Thead>
          </Table>
          <Box display="flex" justifyContent="center">
            <GrDocumentMissing color="grey" fontSize="10em" opacity="0.05" />
          </Box>
        </Stack>
      )}

      {!noPagination && !loading && currentLength && (
        <HStack spacing="20px" justifyContent="flex-end" py="10px">
          <Text fontSize=".8em" fontWeight="bold">
            Page {page + 1} of {Math.ceil(total / DATA_ROWS.LIMIT)}
          </Text>
          <Button {...LEFT_STYLE} onClick={goBack}>
            <BiChevronLeft />
          </Button>

          <Button {...RIGHT_STYLE} onClick={goNext}>
            <BiChevronRight />
          </Button>
        </HStack>
      )}
    </Box>
  )
}
