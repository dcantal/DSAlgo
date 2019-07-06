import math

def merge_sort(A):
    if len(A) <= 1:
        return A
    midIdx = math.trunc(len(A)/2)
    leftHalf = A[0:midIdx]
    rightHalf = A[midIdx:]

    sortedLeft = merge_sort(leftHalf)
    sortedRight = merge_sort(rightHalf)

    return merge(sortedLeft, sortedRight)

def merge(A, B):
    merged = []

    while len(A) or len(B):
        
        el1 = A[0] if len(A) else math.inf
        el2 = B[0] if len(B) else math.inf

        if el1 < el2:
            next_one = A.pop(0)
        else:
            next_one = B.pop(0)
    
        merged.append(next_one)

    return merged


A = [1,3,5,7,9]
B = [2,4]

C = [1,13,2,6,2,23,4,5,9,7]

print(merge_sort(C))
