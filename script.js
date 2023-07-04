function calculateMinCost() {
    const ropeLengthsInput = document.getElementById('rope-lengths');
    const resultDiv = document.getElementById('result');
    
    const ropeLengths = ropeLengthsInput.value.split(',').map(Number);

    const minCost = findMinCost(ropeLengths);
    
    resultDiv.textContent = `Minimum cost of ropes: ${minCost}`;
}

function findMinCost(ropeLengths) {
    if (ropeLengths.length <= 1) {
        return 0;
    }
    
    let minCost = 0;
    
    // Create a min heap to store the rope lengths
    const minHeap = new MinHeap();
    
    // Insert all the rope lengths into the min heap
    ropeLengths.forEach(length => minHeap.insert(length));
    
    // Merge the ropes until only one rope is left in the heap
    while (minHeap.size() > 1) {
        const rope1 = minHeap.extractMin();
        const rope2 = minHeap.extractMin();
        
        const newRope = rope1 + rope2;
        minCost += newRope;
        
        minHeap.insert(newRope);
    }
    
    return minCost;
}
