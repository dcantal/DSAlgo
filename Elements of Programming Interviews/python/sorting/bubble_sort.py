def bubble_sort(A):
    sorted = False

    while not sorted:
        sorted = True
        for i in range(len(A)-1):
            if A[i] > A[i+1]:
                A[i], A[i+1] = A[i+1], A[i]
                sorted = False
    
    return A

A = [3,2,5,1,3,2,6,1,4,24,13,12,35]

print(bubble_sort(A))