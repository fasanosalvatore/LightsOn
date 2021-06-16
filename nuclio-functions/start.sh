#!/bin/bash

./nuctl deploy --file /funcs/nuclio-save-light-on.yml --image nuclio/processor-save-light-on --platform local && ./nuctl deploy --file /funcs/nuclio-light-on-control.yml --image nuclio/processor-light-on-control --platform local
