import BinarySearch from "../components/algorithms/search/BinarySearch";
import LinearSearch from "../components/algorithms/search/LinearSearch";
import BubbleSort from "../components/algorithms/sort/BubbleSort";
import MergeSort from "../components/algorithms/sort/MergeSort";
import QuickSort from "../components/algorithms/sort/QuickSort";

const algorithms = [
    {
        category: "sort",
        algs: [
            {
                label: "quick sort",
                element: <QuickSort />,
            },
            {
                label: "bubble sort",
                element: <BubbleSort />,
            },
            {
                label: "merge sort",
                element: <MergeSort />,
            },
        ],
    },
    {
        category: "search",
        algs: [
            {
                label: "binary search",
                element: <BinarySearch />,
            },
            {
                label: "linear search",
                element: <LinearSearch />,
            },
        ],
    },
];

export default algorithms;