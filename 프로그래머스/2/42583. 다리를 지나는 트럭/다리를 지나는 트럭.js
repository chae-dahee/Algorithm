function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    let cur_bridge_weight = 0;
    let bridge_queue = []
    
    while(bridge_queue.length >0 || truck_weights.length >0){
        time++;
        if(bridge_queue.length>0 && bridge_queue[0][1] <= time){
            const [cur_truck_weight, _] = bridge_queue.shift();
            cur_bridge_weight -= cur_truck_weight;
        }
        if(truck_weights.length >0){
            const next_truck_weight = truck_weights[0];
            if(bridge_queue.length < bridge_length &&
              cur_bridge_weight + next_truck_weight <= weight){
                truck_weights.shift();
                cur_bridge_weight += next_truck_weight;
                bridge_queue.push([next_truck_weight, time + bridge_length])
            }
        }
    }
    
    return time;
}