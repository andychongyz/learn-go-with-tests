package shapes
import "math"

type Shape interface {
	Area() float64
}

type Rectangle struct {
	Width, Height float64
}

type Circle struct {
	Radius float64
}

type Triangle struct {
	Base, Height float64
}

func Perimeter(rectangle Rectangle) float64 {
	return 2 * (rectangle.Width + rectangle.Height)
}

func (r Rectangle) Area() float64 {
	return r.Width * r.Height
}

func (c Circle) Area() float64 {
	return math.Pi * c.Radius * c.Radius
}

func (t Triangle) Area() float64 {
	return (t.Base * t.Height) * 0.5
}


var count_chains = function(array) {
	var chains = 0
	
	var i = 0
	while (i < length(array)) {
			var j = 0
			
			while (j < length(get(array, i))) {
					if (get(get(array, i), j) 
			}
	}
}