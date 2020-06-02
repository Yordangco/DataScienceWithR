generalFunctions<-function(datas,option){
  switch (option,
          sum = sum(datas),
          sd= sd(datas),
          mean=mean(datas),
          median=median(datas),
          var=var(datas),
          max=max(datas),
          min=min(data))
}